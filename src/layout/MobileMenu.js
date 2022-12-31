import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
const MobileMenu = ({ logo }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu navbar-expand-lg d-block d-lg-none mobile-header">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo my-15">
            <Link href="/home">
              <a>
                <img
                  src={logo ? logo : "assets/images/logos/logo.png"}
                  alt="Logo"
                  title="Logo"
                />
              </a>
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            eventKey="nav"
            as="button"
            className="navbar-toggle"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="nav" className="navbar-collapse clearfix">
          <ul className="navigation clearfix">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li className="dropdown">
              <a href="#">Our Services</a>
              <ul style={activeLi("services")}>
              <li>
                <Link href="/team">Website Development</Link>
                </li>
                <li>
                  <Link href="/team-profile">E-Commerce Solutions</Link>
                </li>
                <li>
                  <Link href="/team-profile">Applications Development</Link>
                </li>
                <li>
                  <Link href="/team-profile">Digital Marketing</Link>
                </li>
                <li>
                  <Link href="/team-profile">UI/UX Designing</Link>
              </li>
              </ul>
              <div
                className="dropdown-btn"
                onClick={() => activeMenuSet("services")}
              >
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="#">Our Solutions</a>
              <ul style={activeLi("Project")}>
              <li>
                <Link href="/projects">Industry Solutions</Link>
                </li>
                <li>
                  <Link href="/project-creative">Integrated Solutions</Link>
                </li>
                <li>
                  <Link href="/project-carousel">CRM Solutions</Link>
                </li>
                <li>
                  <Link href="/project-details">SaaS Solutions</Link>
                </li>
                <li>
                  <Link href="/project-details">Software Solutions</Link>
                </li>
              </ul>
              <div
                className="dropdown-btn"
                onClick={() => activeMenuSet("Project")}
              >
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li>
              <Link href="/contact">Careers</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};
export default MobileMenu;
