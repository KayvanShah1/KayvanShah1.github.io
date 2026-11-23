# 💼 Kayvan Shah | Developer Portfolio

This is my personal portfolio, showcasing work in data engineering, MLOps, machine learning, and creative coding. Built with a modern stack, the site blends technical expertise with visual storytelling — featuring interactive animations and detailed project documentation.

## 🧩 Key Features

- **Responsive, Minimal Design** — Tailored for both desktop and mobile devices.
- **Tabbed Experience Section** — Cleanly displays multi-role and multi-company timelines.
- **Projects & Education** — Highlights academic background and impactful engineering contributions.
- **Web3Forms Contact** — Easy-to-use, spam-free form handling.
- **Creative Visuals** — Includes custom interactive sketches like the circuit tree (p5.js + WebGL).

## 🌟 Visual Highlight

**Recursive Electric Circuit Tree**
A dynamic, interactive visualization of recursive circuit-style trees built using `p5.js` with `WebGL` and rendered inside a React component using `p5-wrapper`. The animation features smooth branch growth, shine propagation, tree sway on user interaction, shine reset, and saving a snapshot of the tree and regrowth of tree.

### ⚙️ Customization Options

All key animation parameters are exposed and can be tweaked, including:

- `maxDepth`, `maxBranchesPerNode`
- `shineSpeed`, `growthDelay`, `childDelay`, `growthDuration`
- `treeScale`, `swayDecayDuration`

These allow experimentation with different tree behaviors and styles.

### 🖱️ Interactions

- **Left Click:** Triggers a sway based on click location
- **Timed Shine:** Pulses from the tree center periodically
- **Tree Charging:** Brief glow effect before shine

## 🛠 Tech Stack

- React + TypeScript + Vite+
- TailwindCSS / ShadCN UI
- p5.js (WebGL)
- Web3Forms for contact handling
- GitHub Pages for deployment

## Local Development

Use Node.js 26.13.1 (see `.node-version`) and pnpm 12.23.0, pinned in `package.json`.
If you use the global Vite+ CLI, `vp install` also uses the project's pinned pnpm version.

```sh
pnpm install
pnpm dev
```

| Command             | Purpose                                            |
| ------------------- | -------------------------------------------------- |
| `pnpm check`        | Check formatting, lint rules, and types with Vite+ |
| `pnpm format`       | Format code, including sorting Tailwind classes    |
| `pnpm format:check` | Check formatting without changing files            |
| `pnpm lint`         | Run lint rules and type checks                     |
| `pnpm typecheck`    | Check the project with TypeScript                  |
| `pnpm build`        | Type-check and build the site into `dist/`         |
| `pnpm preview`      | Serve the production build locally                 |

Vite+ uses Oxlint and Oxfmt. Their settings live in `vite.config.ts`.
Linting uses Oxlint defaults with React hook and Fast Refresh checks.
Lint and check commands fail on warnings as well as errors.
Commit `pnpm-lock.yaml` when dependencies change; CI installs with `pnpm install --frozen-lockfile`.
Keep the Vite+ and Vite core versions in `pnpm-workspace.yaml` aligned when upgrading the toolchain.

GitHub Actions checks and builds pushes to `main`, then deploys `dist/` to GitHub Pages.
The build reads the same Node.js version from `.node-version`. GitHub Pages serves the generated static files and does not run Node.js.
For the existing manual branch deployment, `pnpm run deploy` builds the site before publishing with `gh-pages`.

## Editing Portfolio Data

Edit the datasets in [`src/data`](src/data) to update education, experience, leadership, projects, skills, social links, and company logo references. The record types live in [`src/data/types`](src/data/types). Profile sections in `src/components/features/profile` render that data, and image files live in `src/assets`.

#### License

This project is **publicly viewable** for portfolio purposes, but **not licensed for reuse, distribution, or derivative works** without **explicit permission** from the author.

Read more [here](LICENSE).

If you'd like to use parts of this project or collaborate, feel free to reach out via the contact form on the site.

#### Disclaimer

<sub>
This portfolio and the associated code, visuals, and documentation were written and developed by Kayvan Shah, with collaborative input, code structuring, and creative ideation assisted by AI tools including ChatGPT and Perplexity. All content remains the intellectual property of the author unless otherwise stated.  
</sub>
