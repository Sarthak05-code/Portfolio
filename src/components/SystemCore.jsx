import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SystemCore() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );

    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    container.appendChild(renderer.domElement);

    // Temporary object
    const geometry = new THREE.SphereGeometry(1, 16, 16);

    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
    });

    const sphere = new THREE.Mesh(geometry, material);

    scene.add(sphere);

    // Animation
    let animationFrame;

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      sphere.rotation.x += 0.002;
      sphere.rotation.y += 0.003;

      renderer.render(scene, camera);
    };

    animate();

    // Resize
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", handleResize);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-80 w-full md:h-96"
      aria-hidden="true"
    />
  );
}