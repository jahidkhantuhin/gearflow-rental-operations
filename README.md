<div align="center">

# Gearflow
### Rental operations, in flow.

**A polished, interactive operations workspace for equipment rental teams.**

Fleet · Bookings · Customers · Maintenance · Reporting

[Explore the experience](#product-tour) · [Run locally](#get-started) · [Architecture](#architecture) · [Roadmap](#roadmap)

</div>

---

## The idea

Rental teams coordinate valuable equipment, busy job sites, changing schedules, and customer expectations across disconnected tools. Gearflow brings the day-to-day operation into one clear workspace: see what is ready, reserve it, keep customers moving, and catch maintenance before it becomes downtime.

This repository is a **portfolio-ready product prototype** built to demonstrate product thinking, front-end architecture, thoughtful interaction design, and a credible path from demo to production. It ships with a realistic sample business so the experience is useful immediately, without setting up a database or external account.

## Product tour

![Gearflow product tour showing the overview, availability calendar, equipment, bookings, customers, maintenance, reports, and settings](docs/media/gearflow-overview.gif)

[Browse the full-page screenshots](docs/media/screenshots), including the booking, equipment, customer, and workspace forms.

| Workspace | What it helps a team do |
| --- | --- |
| **Overview** | Scan utilization, revenue, fleet availability, and upcoming rentals from one operational dashboard. |
| **Availability calendar** | See reservations and availability across the fleet on one schedule. |
| **Equipment** | Search and filter a sample fleet, inspect equipment health, change service availability, and add assets. |
| **Bookings** | Review reservations and create a booking with customer, equipment, rental dates, and calculated pricing. |
| **Customers** | Browse customer contacts and relationship history; add a customer to the directory. |
| **Maintenance** | See the service queue and return repaired equipment to the available fleet. |
| **Reports** | Review revenue, rental days, on-time returns, and top-rated equipment. |
| **Settings** | Configure the workspace name, manage the demo notification preference, and restore sample data. |

Every view is reachable from the sidebar. Forms validate required fields, updates flow between views, and the demo saves equipment, bookings, customers, and workspace configuration in browser local storage.

## Design principles

- **Operational clarity:** status, rate, health, and next action are visible where teams need them.
- **Fast by default:** searchable fleet, quick navigation, and focused forms keep common work short.
- **Responsive by design:** the layout adapts from a wide operations desk to compact mobile screens.
- **A believable first run:** sample equipment, bookings, and customer records make the product presentation-ready.
- **No demo account required:** changes are local to the browser and can be reset from Settings.

## Get started

### Requirements

- Node.js 18 or later
- npm 9 or later

### Run the app

```bash
git clone https://github.com/jahidkhantuhin/gearflow-rental-operations.git
cd gearflow-rental-operations
npm install
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000). A production bundle is created in `build/`:

```bash
npm run build
```

> The repository currently uses Create React App 3 and React 16 to preserve its existing dependency set. A small cross-platform launcher enables the OpenSSL legacy provider for the old Webpack 4 toolchain on modern Node releases. Upgrade to a current build toolchain as a follow-up; the active demo is organized around reusable UI, sample data, and a storage adapter.

## Demo guide

1. Open **Equipment** and search for a lift or excavator. Try the category filters and toggle a machine into or out of maintenance.
2. Choose **New booking**, select an available machine and customer, and set rental dates. The booking total is calculated from the day rate and rental length.
3. Open **Bookings** to see the reservation and **Equipment** to see its updated availability.
4. Add a customer or asset, then refresh the browser to confirm local persistence.
5. Visit **Settings → Reset demo data** to restore the original portfolio scenario.

## Architecture

```text
src/
├── App/
│   ├── App.js          # Workspace shell, view composition, demo state, and workflows
│   └── App.css         # Design system and responsive application styles
├── components/         # Reusable controls and presentation components
├── data/
│   ├── demoData.js      # Portfolio seed records and relative demo dates
│   └── storage.js       # Guarded, namespaced browser persistence
├── pages/              # Original product management forms retained for reference
├── index.css           # Global defaults and focus treatment
└── index.js            # Application entry point
```

The active demo keeps its state in React and persists records under the `gearflow:` local-storage namespace. Seed data is applied only when the browser has no saved workspace. Storage access is guarded so the application can recover from invalid or unavailable values by falling back to demo data.

### Data model

- **Equipment:** inventory code, name, model, category, day rate, availability, and health.
- **Booking:** booking reference, customer, assigned asset, rental period, total, and status.
- **Customer:** organization, contact details, booking count, lifetime value, and relationship status.
- **Workspace:** a configurable organization name, separate from the Gearflow product identity.

### Production evolution

The current implementation is intentionally a self-contained showcase. A production deployment should add a typed API boundary, authentication and tenant isolation, database-backed inventory and reservations, server-side availability checks, audit history, role-based permissions, and automated integration tests. The UI is structured around those domain boundaries so a backend can replace local storage without changing the product concepts.

## Deployment

The production build is a static React bundle and can be hosted on Vercel, Netlify, GitHub Pages, or any static web server. For a project URL hosted below a path prefix, set the Create React App `homepage` value before building and configure the host to serve `index.html` for the app route.

## Configuration

The sample organization name (**Atlas Equipment**) is editable in **Settings → Workspace profile** and is stored per browser. Replace it with a workspace or client name for a presentation. Product branding is **Gearflow**; profile ownership is **Jahid Khan**.

## Roadmap

- [ ] Upgrade to a current React toolchain and TypeScript.
- [ ] Extract feature modules for inventory, booking, customers, maintenance, and reporting.
- [ ] Add an API-backed persistence adapter and relational schema.
- [ ] Introduce role-aware authentication and organization-scoped access.
- [ ] Add conflict-safe reservations, deposits, taxes, and cancellation policies.
- [ ] Add automated unit, interaction, accessibility, and end-to-end coverage.
- [ ] Add CI checks, preview deployments, and operational monitoring.

## License

This project is licensed under the [MIT License](LICENSE). Copyright © 2026 Jahid Khan Tuhin.

---

<div align="center">Built by <strong>Jahid Khan</strong> · A portfolio project in rental operations software</div>
