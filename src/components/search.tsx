'use client'
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface FilteredDataType {
  title: string;
  slug: {
    current: string;
  };
  productImage: {
    asset: {
      _ref: string;
    };
  };
  description: string;
}

const Search: React.FC = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState<FilteredDataType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (searchValue: string) => {
    setLoading(true);
    try {
      const query = `*[_type == "product"]{
        title,
        slug {
          current
        },
        productImage {
          asset {
            _ref
          }
        },
        description
      }`;
      const response = await client.fetch(query);
      const filteredData: FilteredDataType[] = response.filter(
        (item: FilteredDataType) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
      );

      setData(filteredData.slice(0, 7));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(value);
  }, [value]);

  return (
    <div>
      {value && (
        <div className="absolute z-30 mt-2 w-full top-[60px] ">
          <div className="flex w-full  ">
            <div className=" w-full h-full bg-[#F9F1E7] dark:bg-black ">
              {data.length === 0 ? (
                <h2 className="text-center">Not Found</h2>
              ) : (
                data.map((item) => (
                  <Link
                    href={`/singlepage/${item.slug.current}`}
                    key={item.title}
                    onClick={() => setValue("")}
                  >
                    <div className="px-4 py-2 border-b">
                      <div className="flex items-center space-x-2">
                        <Image
                          src={urlFor(item.productImage).url()}
                          width={80}
                          height={100}
                          alt={item.title}
                          className="rounded object-cover"
                        />
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="line-clamp-1">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
              {loading && <p className="text-center py-2">Loading...</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;