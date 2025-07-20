"use client";
import { Search, X } from "lucide-react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useResponseSearch } from "./hook/useResponseSearch";
import SkeletonCard from "@/components/SkeletonCard";

export default function SearchView() {
  const { watch, register, reset } = useForm({
    defaultValues: {
      q: "",
    },
  });

  const data = useResponseSearch({
    q: watch("q"),
  });

  return (
    <main className="px-36 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-4">
        <div className="py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div className="text-[#4574a1] flex border-none bg-[#e6edf4] items-center justify-center pl-4 rounded-l-xl border-r-0">
                <Search />
              </div>
              <input
                {...register("q")}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0c151d] focus:outline-0 focus:ring-0 border-none bg-[#e6edf4] focus:border-none h-full placeholder:text-[#4574a1] px-4 rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                placeholder="Search for articles..."
              />
              {watch("q") && (
                <div className="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-[#e6edf4] pr-4">
                  <button
                    onClick={() => {
                      reset({ q: "" });
                    }}
                    className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-transparent text-[#0c151d] gap-2 text-base font-bold leading-normal tracking-[0.015em] h-auto min-w-0 px-0"
                  >
                    <X color="gray" />
                  </button>
                </div>
              )}
            </div>
          </label>
        </div>

        <div title="Featured Articles">
          <h2 className="text-[#0c151d] text-xl font-semibold leading-tight tracking-[-0.015em] mb-4">
            Articles
          </h2>
          <div>
            {data.loading ? (
              <SkeletonCard />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.data?.response.docs.map((article) => {
                  const imageUrl = article.multimedia.default.url || "";
                  return (
                    <div
                      key={article._id}
                      className="flex flex-col gap-2 p-4 border rounded-lg h-full bg-white"
                    >
                      {imageUrl ? (
                        <Image
                          width={300}
                          height={200}
                          src={imageUrl}
                          alt={article.headline.main}
                          className="w-[300px] h-[200px] rounded-md object-cover hover:scale-105 transition-all"
                        />
                      ) : (
                        <div className="w-[300px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500">
                          No Image
                        </div>
                      )}

                      <h3 className="text-[#0c151d] text-base font-medium mt-2 line-clamp-2">
                        {article.headline.main || "-"}
                      </h3>

                      <div className="text-[#4574a1] text-sm mt-1 line-clamp-2">
                        {article.abstract || "-"}
                      </div>

                      <div className="flex justify-between items-center mt-auto pt-2">
                        <div className="text-gray-500 text-xs italic">
                          {article.byline?.original || "By Unknown"}
                        </div>
                        <a
                          href={article.web_url}
                          className="inline-block text-sm text-red-500 hover:text-red-700 transition underline"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
