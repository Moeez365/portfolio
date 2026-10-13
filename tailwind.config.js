/**
 * Tailwind CSS Configuration
 * Portfolio — Moeez (Full-Stack Developer)
 */
window.tailwind = window.tailwind || {};
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container": "#201f22",
        "on-error-container": "#ffdad6",
        error: "#ffb4ab",
        "tertiary-fixed-dim": "#e3c290",
        "on-surface-variant": "#c4c7c9",
        "inverse-surface": "#e5e1e4",
        "inverse-primary": "#5d5e60",
        "surface-tint": "#c6c6c7",
        "surface-container-lowest": "#0e0e10",
        "error-container": "#93000a",
        "primary-fixed-dim": "#c6c6c7",
        "surface-variant": "#353437",
        "on-tertiary-fixed": "#281900",
        "on-secondary": "#2f3037",
        primary: "#ffffff",
        "surface-container-high": "#2a2a2c",
        tertiary: "#ffffff",
        "on-primary-fixed": "#1a1c1d",
        "surface-dim": "#131315",
        "outline-variant": "#444749",
        "on-secondary-fixed": "#1a1b22",
        "primary-fixed": "#e2e2e3",
        "surface-container-low": "#1c1b1d",
        "tertiary-fixed": "#ffdeac",
        "on-secondary-fixed-variant": "#45464e",
        "tertiary-container": "#ffdeac",
        "on-primary-fixed-variant": "#454748",
        "on-tertiary": "#412d07",
        "surface-container-highest": "#353437",
        "inverse-on-surface": "#313032",
        outline: "#8e9193",
        "on-surface": "#e5e1e4",
        "on-error": "#690005",
        surface: "#131315",
        "on-primary": "#2f3132",
        "secondary-fixed": "#e2e1eb",
        "on-secondary-container": "#b4b4bd",
        "secondary-container": "#45464e",
        "surface-bright": "#39393b",
        "on-tertiary-fixed-variant": "#59431c",
        "on-tertiary-container": "#7a6037",
        "on-primary-container": "#636466",
        "on-background": "#e5e1e4",
        "primary-container": "#e2e2e3",
        background: "#131315",
        secondary: "#c6c6cf",
        "secondary-fixed-dim": "#c6c6cf",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        "space-lg": "1.5rem",
        "space-3xl": "6rem",
        "space-2xl": "4rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-xl": "2.5rem",
        "margin-tablet": "2rem",
        gutter: "1.5rem",
        "margin-mobile": "1.25rem",
        margin: "4rem",
        "space-md": "1rem",
        "gutter-mobile": "1rem",
      },
      fontFamily: {
        "headline-md": ["Space Grotesk"],
        "label-caps": ["JetBrains Mono"],
        "headline-sm": ["Space Grotesk"],
        "headline-lg": ["Space Grotesk"],
        "display-xl-mobile": ["Space Grotesk"],
        "headline-lg-mobile": ["Space Grotesk"],
        "code-md": ["JetBrains Mono"],
        "body-md": ["Geist"],
        "display-xl": ["Space Grotesk"],
        "code-sm": ["JetBrains Mono"],
        "body-lg": ["Geist"],
        "body-sm": ["Geist"],
      },
      fontSize: {
        "headline-md": [
          "1.875rem",
          {
            lineHeight: "1.25",
            letterSpacing: "-0.02em",
            fontWeight: "500",
          },
        ],
        "label-caps": [
          "0.6875rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.08em",
            fontWeight: "500",
          },
        ],
        "headline-sm": [
          "1.375rem",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.015em",
            fontWeight: "500",
          },
        ],
        "headline-lg": [
          "3rem",
          {
            lineHeight: "1.15",
            letterSpacing: "-0.03em",
            fontWeight: "500",
          },
        ],
        "display-xl-mobile": [
          "2.75rem",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.03em",
            fontWeight: "500",
          },
        ],
        "headline-lg-mobile": [
          "2rem",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
            fontWeight: "500",
          },
        ],
        "code-md": [
          "0.875rem",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        "body-md": [
          "0.9375rem",
          { lineHeight: "1.6", letterSpacing: "0em", fontWeight: "400" },
        ],
        "display-xl": [
          "4.5rem",
          {
            lineHeight: "1.05",
            letterSpacing: "-0.04em",
            fontWeight: "500",
          },
        ],
        "code-sm": [
          "0.75rem",
          {
            lineHeight: "1.4",
            letterSpacing: "0.02em",
            fontWeight: "400",
          },
        ],
        "body-lg": [
          "1.125rem",
          {
            lineHeight: "1.65",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        "body-sm": [
          "0.8125rem",
          { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" },
        ],
      },
    },
  },
};

