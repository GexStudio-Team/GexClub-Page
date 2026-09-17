'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const LIME = 0xc8ff3d;

const BLOCKS = [
  { id: 'A', x: 90, y: 90, w: 130, h: 46 },
  { id: 'B1', x: 220, y: 90, w: 70, h: 46 },
  { id: 'B2', x: 290, y: 90, w: 70, h: 46 },
  { id: 'C', x: 360, y: 90, w: 60, h: 46 },
  { id: 'D', x: 90, y: 136, w: 46, h: 120, lift: 1 },
  { id: 'E', x: 90, y: 256, w: 46, h: 118, lift: 3 },
  { id: 'F', x: 90, y: 374, w: 46, h: 56 },
  { id: 'G', x: 136, y: 374, w: 118, h: 56 },
  { id: 'H', x: 254, y: 374, w: 106, h: 56, lift: 3, glass: true },
  { id: 'I', x: 360, y: 374, w: 60, h: 56 },
  { id: 'J', x: 360, y: 136, w: 60, h: 104 },
  { id: 'L', x: 210, y: 288, w: 210, h: 52, lift: 4, spine: true },
  { id: 'M1', x: 170, y: 160, w: 34, h: 34, lift: 6, glass: true, float: true, z: 1.4 },
  { id: 'M2', x: 305, y: 180, w: 30, h: 30, lift: 8, float: true, z: 2.0 },
  { id: 'M3', x: 240, y: 238, w: 24, h: 24, lift: 5, float: true, z: -1.3 },
  { id: 'O1', x: 424, y: 64, w: 22, h: 22, lift: 6, float: true, z: 2.2 },
  { id: 'O2', x: 430, y: 196, w: 24, h: 24, lift: 4, float: true, z: -1.8 },
  { id: 'O3', x: 430, y: 316, w: 20, h: 20, lift: 7, float: true, z: 2.6 },
  { id: 'O4', x: 292, y: 436, w: 22, h: 22, lift: 5, float: true, z: -2.0 },
  { id: 'O5', x: 62, y: 398, w: 18, h: 18, lift: 6, float: true, z: 1.8 },
];

const EDGES = [
  ['A', 'B1'],
  ['B1', 'B2'],
  ['B2', 'C'],
  ['A', 'D'],
  ['D', 'E'],
  ['E', 'F'],
  ['F', 'G'],
  ['G', 'H'],
  ['H', 'I'],
  ['C', 'J'],
  ['J', 'L'],
  ['L', 'I'],
  ['B2', 'M2'],
  ['J', 'M2'],
  ['M2', 'M3'],
  ['M3', 'L'],
  ['E', 'M1'],
  ['D', 'M1'],
  ['M1', 'E'],
  ['C', 'O1'],
  ['J', 'O2'],
  ['L', 'O3'],
  ['H', 'O4'],
  ['F', 'O5'],
];

const NODE_IDS = ['A', 'B1', 'B2', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L'];

const SCALE = 26;

function to3D(x, y, z = 0) {
  return { x: (x - 260) / SCALE, y: (260 - y) / SCALE, z };
}

export default function GexMark3D({ className = '' }) {
  const wrapRef = useRef(null);
  const mountRef = useRef(null);
  const stateRef = useRef(null);

  useEffect(() => {
    const host = mountRef.current;
    const wrap = wrapRef.current;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 100);
    camera.position.set(0.6, -0.4, 30);
    camera.lookAt(0, 0, 0);

    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    scene.add(new THREE.HemisphereLight(0xffffff, 0x20242e, 0.55));
    const key = new THREE.DirectionalLight(0xffffff, 2.0);
    key.position.set(10, 12, 14);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x9dbaff, 0.7);
    rim.position.set(-8, -4, 10);
    scene.add(rim);
    const limeLight = new THREE.PointLight(LIME, 6, 40, 2);
    limeLight.position.set(0, 0, 8);
    scene.add(limeLight);

    const graphite = (shade = 0) =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0x1a1f27).offsetHSL(0, 0, shade * 0.5),
        metalness: 0.85,
        roughness: 0.38,
        envMapIntensity: 1.5,
      });

    const glassMaterial = () =>
      new THREE.MeshPhysicalMaterial({
        color: 0xbfe9ff,
        metalness: 0.05,
        roughness: 0.08,
        transmission: 1,
        thickness: 0.8,
        ior: 1.35,
        transparent: true,
        opacity: 0.55,
        envMapIntensity: 2,
      });

    const blockGroup = new THREE.Group();

    const zJitter = (id) => {
      let h = 0;
      for (let i = 0; i < id.length; i += 1) h = (h * 31 + id.charCodeAt(i)) % 89;
      return (h / 89 - 0.5) * 0.35;
    };

    BLOCKS.forEach((b) => {
      const w = b.w / SCALE;
      const h = b.h / SCALE;
      const d = b.float ? 0.9 : 1.6;
      const z = b.z !== undefined ? b.z : zJitter(b.id);
      const { x, y } = to3D(b.x + b.w / 2, b.y - (b.lift || 0) + b.h / 2, z);
      const geo = new THREE.BoxGeometry(w, h, d);
      const mat = b.glass ? glassMaterial() : graphite(Math.abs(z) * 0.15);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      blockGroup.add(mesh);

      const edges = new THREE.EdgesGeometry(geo);
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: LIME, transparent: true, opacity: b.glass ? 0.3 : 0.14 })
      );
      line.position.copy(mesh.position);
      blockGroup.add(line);

      if (b.spine) {
        const spine = new THREE.Mesh(
          new THREE.BoxGeometry(w - 8 / SCALE, 0.08, 0.55),
          new THREE.MeshBasicMaterial({ color: LIME })
        );
        spine.position.copy(mesh.position);
        blockGroup.add(spine);
      }
    });

    const byId = Object.fromEntries(BLOCKS.map((b) => [b.id, b]));
    const center3D = (id) => {
      const b = byId[id];
      const z = b.z !== undefined ? b.z : zJitter(b.id);
      return to3D(b.x + b.w / 2, b.y - (b.lift || 0) + b.h / 2, z);
    };

    const wireGroup = new THREE.Group();
    EDGES.forEach(([a, b]) => {
      const p1 = center3D(a);
      const p2 = center3D(b);
      const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(p1.x, p1.y, p1.z), new THREE.Vector3(p2.x, p2.y, p2.z)]);
      const tube = new THREE.Mesh(
        new THREE.TubeGeometry(curve, 2, 0.05, 5),
        new THREE.MeshBasicMaterial({ color: LIME })
      );
      wireGroup.add(tube);
    });

    NODE_IDS.forEach((id) => {
      const p = center3D(id);
      const core = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), new THREE.MeshBasicMaterial({ color: LIME }));
      core.position.set(p.x, p.y, p.z);
      wireGroup.add(core);
      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(0.32, 10, 8),
        new THREE.MeshBasicMaterial({ color: LIME, transparent: true, opacity: 0.18 })
      );
      halo.position.set(p.x, p.y, p.z);
      wireGroup.add(halo);
    });

    scene.add(blockGroup);
    scene.add(wireGroup);

    const root = new THREE.Group();
    root.add(blockGroup);
    root.add(wireGroup);
    scene.add(root);

    const bounds = new THREE.Box3().setFromObject(root);
    const boundsSize = new THREE.Vector3();
    bounds.getSize(boundsSize);
    const RADIUS = Math.max(boundsSize.x, boundsSize.y, boundsSize.z) / 2;

    const makePoints = (count, color, size, opacity, spreadX, spreadY, spreadZ) => {
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i += 1) {
        pos[i * 3] = (Math.random() - 0.5) * spreadX;
        pos[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
        pos[i * 3 + 2] = (Math.random() - 0.5) * spreadZ;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color,
        size,
        transparent: true,
        opacity,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });
      return new THREE.Points(geo, mat);
    };

    const dustLime = makePoints(90, LIME, 0.09, 0.5, 22, 20, 14);
    const dustWhite = makePoints(50, 0xffffff, 0.07, 0.35, 22, 20, 14);
    const dustCyan = makePoints(30, 0x8ff2ff, 0.06, 0.3, 22, 20, 14);
    const stars = makePoints(40, 0xa8f0ff, 0.05, 0.5, 24, 22, 4);
    scene.add(dustLime, dustWhite, dustCyan, stars);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.85, 0.5, 0.18);
    composer.addPass(bloom);

    const clock = new THREE.Clock();
    let raf = 0;
    let disposed = false;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const w = Math.max(64, wrap.clientWidth);
      const h = Math.max(64, wrap.clientHeight);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      const fovRad = THREE.MathUtils.degToRad(camera.fov / 2);
      const tanV = Math.tan(fovRad);
      const tanH = tanV * camera.aspect;
      const d = (RADIUS * 0.92) / Math.min(tanV, tanH);
      camera.position.set(0.5, -0.35, d);
      camera.updateProjectionMatrix();
      composer.setSize(w, h);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const animate = () => {
      if (disposed) return;
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      if (!reduced) {
        root.rotation.y = Math.sin(t * 0.35) * 0.22;
        root.rotation.z = Math.sin(t * 0.27) * 0.05;
        root.position.y = Math.sin(t * 0.8) * 0.3;
        dustLime.rotation.y = t * 0.02;
        dustWhite.rotation.y = -t * 0.015;
        dustCyan.rotation.y = t * 0.012;
        stars.rotation.z = t * 0.01;
      }
      composer.render();
    };
    animate();

    stateRef.current = {
      dispose: () => {
        disposed = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        scene.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
            else obj.material.dispose();
          }
        });
        pmrem.dispose();
        composer.dispose();
        renderer.dispose();
        if (host.contains(renderer.domElement)) host.removeChild(renderer.domElement);
      },
    };

    return () => stateRef.current?.dispose();
  }, []);

  return (
    <div ref={wrapRef} className={className}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}