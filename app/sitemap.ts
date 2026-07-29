import type { MetadataRoute } from "next";

const base = "https://yukudin.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/vendor",
    "/cara-kerja",
    "/bantuan",
    "/tentang",
    "/kontak",
    "/kebijakan-privasi",
    "/syarat-ketentuan",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/vendor" ? 0.9 : 0.6,
  }));
}
