import React from "react";
import "./NavigationBar.css";

/**
 * PUBLIC_INTERFACE
 * NavigationBar component displays the top navigation as designed in Figma/HTML.
 * Includes logo and interactive icon buttons, styled using the app's design tokens and matching Figma/asset CSS.
 */
function NavigationBar() {
  // Icon rendering helpers (for demo, actual SVGs/icons to be used later)
  const renderIcon = (className, label, badge) => (
    <button className={`navbar-icon${badge ? " notification-value" : ""}`} aria-label={label}>
      <span className={className}></span>
      {badge ? <span className="notification-badge">{badge}</span> : null}
    </button>
  );

  // Pressed icon (used for pressed row)
  const renderPressedIcon = (className, label) => (
    <button className="navbar-icon pressed" aria-label={`${label} (active)`}>
      <span className="icon-bg"></span>
      <span className={className}></span>
    </button>
  );

  return (
    <nav className="navbar-root" aria-label="Main Navigation">
      {/* Top Logo */}
      <div className="navbar-logo">
        <span className="navbar-logo-svg" aria-label="Youtube Logo"></span>
      </div>

      {/* Navigation bar (Default) */}
      <div className="navbar-block">
        <div className="navbar-icons-wrapper">
          {renderIcon("icon-hamburger", "Menu")}
          {renderIcon("icon-create", "Create")}
          {renderIcon("icon-chocolate", "Chocolate")}
          {renderIcon("icon-notification", "Notifications")}
          {renderIcon("icon-notification", "Notifications (1)", 1)}
          {renderIcon("icon-profile", "Profile")}
        </div>
      </div>

      {/* Navigation bar (Pressed icons row demo) */}
      <div className="navbar-block navbar-block-pressed">
        <div className="navbar-icons-wrapper">
          {renderPressedIcon("icon-hamburger", "Menu")}
          {renderPressedIcon("icon-create", "Create")}
          {renderPressedIcon("icon-chocolate", "Chocolate")}
          {renderPressedIcon("icon-notification", "Notifications")}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
