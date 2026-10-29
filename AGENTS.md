<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Content architecture
- Blog posts live in `src/content/posts/*.md` with validated YAML frontmatter and are bundled by Vite, so publishing requires only a content file and no database or filesystem at runtime.
- Shared blog parsing/filtering lives in browser-safe modules; route loaders resolve local posts and throw `notFound()` for unknown slugs, so direct article URLs work during SSR.
- Render article bodies through React Markdown with raw HTML disabled, GFM and stable heading IDs, so rich content stays readable without executing embedded HTML.
