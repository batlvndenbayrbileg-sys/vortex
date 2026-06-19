"use client";

import { Component, ReactNode } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

class SplineErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn("[Spline] runtime error caught:", error.message);
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}

export function SplineSafe({
  scene,
  className,
  fallback,
}: {
  scene: string;
  className?: string;
  fallback?: ReactNode;
}) {
  return (
    <SplineErrorBoundary fallback={fallback}>
      <div className={className}>
        <Spline scene={scene} />
      </div>
    </SplineErrorBoundary>
  );
}
