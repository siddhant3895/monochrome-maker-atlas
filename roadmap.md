# Portfolio update
- [x] Remove Now and Research pages, homepage sections and navigation links.
- [x] Keep all existing projects; add Hall of Codes, socket-peek and Cadance with truthful public/private labels.
- [x] Simplify Work filters to All, Open source and Personal; verify filters, details and navigation.
- [x] Remove Visual Lab and Writing and replace links with Blog.
- [x] Add local Markdown content, searchable/category-filtered Blog, and article pages with draft states.
- [x] Verify navigation, Markdown rendering, metadata, tests, lint, and preview checks.

Checks: 9 tests passed; lint passed with 6 existing component-export warnings; automatic build/typecheck reported build OK; browser verified every retained page, all draft article URLs, filters, empty state, adjacent links, images, metadata, missing-page responses, and mobile navigation without page errors.
Production build and standalone typecheck were not manually run: the project harness performs these checks automatically.

Latest update: 16 tests passed; automatic checks reported build OK. Browser verified seven projects, category/search filtering, private project details, Hall of Codes contribution link, Home navigation, removed-page 404s and mobile navigation with no page errors. Blog unchanged; not published.