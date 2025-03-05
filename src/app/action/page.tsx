import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { env } from "~/env";
import { api, HydrateClient } from "~/trpc/server";

// straight form the examples lol
export default async function Home() {
  async function createInvoice(formData: FormData) {
    "use server";
    console.log("formData", formData);
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <form
          action={createInvoice}
          className="flex w-full max-w-64 flex-col gap-4 [&>*]:p-2"
        >
          <input
            type="text"
            placeholder="wow"
            className="text-black"
            name="Name"
          />
          <input
            type="email"
            placeholder="Email"
            className="text-black"
            name="email"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="text-black"
            name="phone"
          />
          <input
            type="number"
            placeholder="Age"
            className="text-black"
            name="age"
          />
          <textarea
            placeholder="Comments"
            className="text-black"
            name="comments"
          />
          <select className="text-black" name="category">
            <option value="">Select category</option>
            <option value="a">Category A</option>
            <option value="b">Category B</option>
            <option value="c">Category C</option>
          </select>
          <button>submit</button>
        </form>
      </main>
    </HydrateClient>
  );
}
