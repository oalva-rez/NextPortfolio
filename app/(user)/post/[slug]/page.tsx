import BlogFooter from "@/components/BlogFooter";
import BlogNavbar from "@/components/BlogNavbar";
import SearchButton from "@/components/SearchButton";
import { builder } from "@/sanity/lib/builder";
import { cachedClient } from "@/sanity/lib/client";
import { postQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import CodeBlock from "@/components/CodeBlock";
import { getImageDimensions } from "@sanity/asset-utils";

type Props = {
  params: {
    slug: string;
  };
};

// Barebones lazy-loaded image component
const SampleImageComponent = ({
  value,
  isInline,
}: {
  value: any;
  isInline: boolean;
}) => {
  const { width, height } = getImageDimensions(value);

  return (
    <Image
      alt={value?.alt || " Main blog image "}
      src={builder.image(value).width(800).height(500).url()}
      width={800}
      height={500}
      className="h-auto w-full rounded-xl shadow-xl text-transparent"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

const SampleCodeComponent = ({
  value,
  isInline,
}: {
  value: any;
  isInline: boolean;
}) => {
  return (
    <CodeBlock
      code={value.code}
      filename={value.filename}
      language={value.language}
    />
  );
};

const components = {
  types: {
    image: SampleImageComponent,
    code: SampleCodeComponent,

    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};

export default async function Post({ params: { slug } }: Props) {
  const post = await cachedClient<SanityDocument>(postQuery, { slug });
  return (
    <main className="flex flex-col items-center justify-center">
      <SearchButton />
      <div className="min-h-screen container mx-auto max-w-4xl px-5">
        <div className=" grid grid-cols-1 gap-4 md:gap-16 divide-blue-100 divide-y">
          <BlogNavbar
            firstTitle="Akarshan's"
            lastTitle="Blog"
            blogDescription=""
          />
          <div className="pt-4 md:pt-16">
            <h1 className="mb-12 text-left text-4xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-7xl md:leading-none">
              <span className="bg-gradient-to-br from-indigo-200 to-indigo-500 bg-clip-text font-bold text-transparent">
                {post.title}
              </span>
            </h1>

            {/* IMAGE  */}
            <div className="mx-auto max-w-2xl">
              <>
                <div className="relative mb-4 md:mb-8">
                  <Image
                    alt={post?.mainImage?.alt || " Main blog image "}
                    src={builder
                      .image(post?.mainImage)
                      .width(800)
                      .height(500)
                      .url()}
                    width={800}
                    height={500}
                    className="h-auto w-full rounded-xl shadow-xl text-transparent"
                  />
                  <div
                    className="absolute bottom-0 w-full bg-black 
              bg-opacity-20 backdrop-blur-lg  drop-shadow-lg
            p-5 flex justify-between rounded-xl items-center
          "
                  >
                    <span className="font-semibold text-slate-200 text-base flex flex-col gap-2">
                      <Image
                        src={builder
                          .image(post?.author?.image || " Author image")
                          .width(200)
                          .height(200)
                          .url()}
                        width={32}
                        height={32}
                        alt={post?.author?.name}
                        className="rounded-full"
                      />
                      {post?.author?.name}
                    </span>
                    <div className="flex gap-2">
                      {post?.categories?.map(
                        (category: SanityDocument, index: number) => (
                          <p
                            key={index}
                            style={{
                              color: category.color,
                              borderColor: category.color,
                            }}
                            className={`text-sm  font-semibold rounded-lg border p-2`}
                          >
                            {category.title}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </>
              <div className="mb-6 text-lg">April 10, 2023</div>
            </div>
          </div>
          {/* CONTENT */}
          <article
            className="pt-4 md:pt-16 mx-auto max-w-2xl 
          prose sm:prose-lg md:prose-xl prose-invert
          "
          >
            {post?.body ? (
              <PortableText value={post.body} components={components} />
            ) : null}
          </article>
          {/* FOOTER */}
          <BlogFooter
            email="akarshan@ualberta.ca"
            bottomHeader="Made with ❤️ by"
            bottomLink="Akarshan Mishra"
            bottomHref="https://akarshan.vercel.app/"
          />{" "}
        </div>
      </div>
    </main>
  );
}