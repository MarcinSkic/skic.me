import { error } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    const post = await import(`../../../posts/${params.slug}.md`); //TODO: Don't use relative path

    return {
      content: post.default,
      meta: post.metadata,
    };
  } catch (e) {
    error(404, `Could not find ${params.slug}`);
  }
}
