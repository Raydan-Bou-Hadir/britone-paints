import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useBlogStore } from "../store.ts/BlogStore";

export function Blogs() {
  const { blogGroup: blogPosts } = useBlogStore();

  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Latest Insights</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Stay updated with tips, trends, and industry news
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.id}`}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group h-full block"
            >
              <Card className="h-full">
                <div className="relative h-54 overflow-hidden pt-6">
                  <img
                    src={post.blogImage || "/placeholder.svg"}
                    alt={post.blogTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                        {post.blogDate}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {post.blogTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{post.blogDescription}</CardDescription>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
