"use client";

import { useMemo, useState } from "react";
import styles from "./Logo.module.css";

export const LOGO_NAME = "Aurora Pulse";
export const LOGO_TAGLINE = "Illuminating momentum for modern digital products.";

const rawSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="640" height="360" viewBox="0 0 640 360" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(320 160) rotate(90) scale(220 280)">
      <stop offset="0.05" stop-color="#2D99FF" stop-opacity="0.72"/>
      <stop offset="0.45" stop-color="#6D3CFF" stop-opacity="0.42"/>
      <stop offset="1" stop-color="#05071A" stop-opacity="0.08"/>
    </radialGradient>
    <linearGradient id="flare" x1="128" y1="32" x2="496" y2="320" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#3CF5FF"/>
      <stop offset="0.42" stop-color="#7C63FF"/>
      <stop offset="1" stop-color="#FF5AEF"/>
    </linearGradient>
    <linearGradient id="aurora" x1="160" y1="72" x2="480" y2="288" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#50F5D0"/>
      <stop offset="0.33" stop-color="#3EBCFF"/>
      <stop offset="0.66" stop-color="#6F5BFF"/>
      <stop offset="1" stop-color="#FF7DEB"/>
    </linearGradient>
    <filter id="shadow" x="-40" y="-40" width="720" height="440" filterUnits="userSpaceOnUse">
      <feGaussianBlur stdDeviation="40" result="coloredAlpha"/>
      <feOffset dy="16"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.28"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="640" height="360" rx="36" fill="#050715"/>
  <rect width="640" height="360" rx="36" fill="url(#glow)"/>
  <g filter="url(#shadow)">
    <path d="M320 74C270 74 212 104 188 164C176 194 172 230 187 260C210 308 257 334 320 334C383 334 430 308 453 260C471 222 470 182 453 144C430 96 383 74 320 74Z" fill="url(#flare)" fill-opacity="0.12"/>
    <path d="M320 98C269 98 226 128 206 180C198 200 196 224 204 244C220 286 262 310 320 310C378 310 420 286 436 244C446 218 446 190 436 164C420 122 378 98 320 98Z" fill="url(#aurora)" fill-opacity="0.35"/>
    <path d="M318.5 112C289.5 112 260.5 128.5 245 156.5C233 178 232 203 244 224C260.5 252 289.5 268 318.5 268C347.5 268 376.5 252 393 224C404 206 406 184 393 162.5C376.5 134.5 347.5 118 318.5 118V112Z" fill="url(#flare)"/>
    <path d="M318.5 130C300.5 130 283 140 273.5 155C265 168.5 264 185 273 199.5C283.5 216.5 300.5 227 318.5 227C336.5 227 353.5 216.5 364 199.5C372 187 372.5 170 364.5 156.5C353.5 140.5 336.5 130 318.5 130Z" fill="#050715"/>
    <path d="M318.5 130C300.5 130 283 140 273.5 155C265 168.5 264 185 273 199.5C283.5 216.5 300.5 227 318.5 227C336.5 227 353.5 216.5 364 199.5C372 187 372.5 170 364.5 156.5C353.5 140.5 336.5 130 318.5 130ZM318.5 208.5C309 208.5 299.5 203.5 294 194.5C289 187 289 177.5 293.5 169.5C298.5 160.5 308.5 155 318.5 155C328.5 155 338.5 160.5 343.5 169.5C348 177.5 347.5 187 342.5 194.5C337 203.5 328 208.5 318.5 208.5Z" fill="url(#flare)"/>
    <path d="M413 112L372 219H385.5L426.5 112H413Z" fill="url(#aurora)"/>
    <path d="M222.5 112L263.5 219H250L209 112H222.5Z" fill="url(#aurora)"/>
  </g>
  <text x="50%" y="292" font-family="'Sora', 'Segoe UI', sans-serif" font-size="40" font-weight="600" fill="#F4F7FF" text-anchor="middle" letter-spacing="8">AURORA</text>
  <text x="50%" y="330" font-family="'Inter', 'Segoe UI', sans-serif" font-size="16" font-weight="400" fill="#8EA4FF" text-anchor="middle" letter-spacing="6">PULSE</text>
</svg>`;

const encodedSvgUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  rawSvg,
)}`;

export function LogoArtwork() {
  return (
    <div
      className={styles.artwork}
      role="img"
      aria-label={`${LOGO_NAME} logotype artwork`}
      dangerouslySetInnerHTML={{ __html: rawSvg }}
    />
  );
}

export function LogoDownloadPanel() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawSvg);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      setCopied(false);
    }
  };

  const gradients = useMemo(
    () => [
      { label: "Aurora Prism", value: "#3CF5FF → #FF5AEF" },
      { label: "Night Base", value: "#050715" },
      { label: "Accent Glow", value: "#50F5D0 → #6F5BFF" },
    ],
    [],
  );

  return (
    <div className={styles.panel}>
      <div className={styles.actions}>
        <a href={encodedSvgUrl} download="aurora-pulse-logo.svg">
          Download SVG
        </a>
        <button type="button" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy SVG"}
        </button>
      </div>
      <div className={styles.palette}>
        {gradients.map((swatch) => (
          <div key={swatch.label} className={styles.swatch}>
            <span className={styles.swatchDot} />
            <div>
              <p>{swatch.label}</p>
              <small>{swatch.value}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const LOGO_SVG = rawSvg;

