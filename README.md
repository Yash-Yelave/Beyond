# Beyond

Beyond is a modern React + Tailwind CSS web application designed to support a private equity and mentorship ecosystem. It features the **WISDOM Framework** and a **Contribution Economy** where members can earn Impact Tokens for mentoring founders and redeeming them for bespoke networking events.

## Key Features

- **WISDOM Framework Knowledge Base:** A centralized hub for understanding investment timelines, token utility, and general FAQs.
- **Contribution Economy:** An ecosystem built around Impact Tokens earned through active mentorship and community involvement.
- **Member Dashboard:** Secure access to the Member Request Portal for submitting parameters for curated networking opportunities.
- **Modern UI/UX:** Built with React and styled with standard Tailwind CSS to deliver a clean, responsive, and dynamic user experience (e.g., interactive FAQ accordions, feature grids).

## Tech Stack

- **Framework:** [React](https://reactjs.org/) (initialized with Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** Modular component architecture (e.g., `FeatureGrid`, `FAQ`)

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and npm (or yarn/pnpm) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Beyond
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `src/App.jsx` - The main application flow integrating components like `<FeatureGrid />` and `<FAQ />`.
- `src/components/FAQ.jsx` - Dynamic accordion component serving the WISDOM Knowledge Base.
- `src/components/FeatureGrid.jsx` - Primary feature layout component (stub).

## License

This project is licensed under the MIT License.
