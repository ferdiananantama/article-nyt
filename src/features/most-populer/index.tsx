"use client";
import Image from "next/image";
import { useMostPopuler } from "./hook/useMostPopuler";
import SkeletonCard from "@/components/SkeletonCard";
export default function MostPopulerCardView() {
  const data = useMostPopuler();

  return data.loading ? (
    <SkeletonCard />
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.data?.results.map((article) => {
        const imageUrl = article.media?.[0]?.["media-metadata"]?.[2]?.url || "";

        return (
          <>
            <div
              key={article.id}
              className="flex flex-col gap-2 p-4 border rounded-lg h-full bg-white"
            >
              {imageUrl ? (
                <Image
                  width={300}
                  height={200}
                  src={imageUrl}
                  alt={article.title}
                  className="w-[300px] h-[200px] rounded-md object-cover  hover:scale-105 transition-all"
                />
              ) : (
                <div className="w-[300px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500">
                  No Image
                </div>
              )}

              <h3 className="text-[#0c151d] text-base font-medium mt-2 line-clamp-2">
                {article.title || "-"}
              </h3>

              <div className="text-[#4574a1] text-sm mt-1 line-clamp-2">
                {article.abstract || "-"}
              </div>

              <div className="flex justify-between items-center mt-auto pt-2">
                <div className="text-gray-500 text-xs italic">
                  {article.byline || "By Unknown"}
                </div>
                <a
                  href={article.url}
                  className="inline-block text-sm text-red-500 hover:text-red-700 transition underline"
                >
                  View
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
