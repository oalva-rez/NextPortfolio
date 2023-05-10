interface CodeBlockCardProps {
  // define the props for the CodeBlockCard component here
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      CodeBlockCard: CodeBlockCardProps;
    }
  }
}

export default function CodeBlockCard() {
  return (
    <div className="card group h-full rounded-3xl flex flex-col gap-3 border transition-colors border-neutral-700 bg-neutral-800/30">
      <div className="w-full h-[30px] bg-[#343830] rounded-t-3xl flex flex-row justify-center items-center gap-3 px-5 ">
        <div className="flex flex-row gap-1">
          <div className="rounded-full w-[14px] h-[14px] bg-[#DA2828]"></div>
          <div className="rounded-full w-[14px] h-[14px] bg-[#F3F800]"></div>
          <div className="rounded-full w-[14px] h-[14px] bg-[#17F404]"></div>
        </div>

        <div className="w-full text-center text-base font-mono">
          Projects.tsx
        </div>
      </div>
      <div className="font-mono px-5">
        <span className="text-red-600">import</span>{" "}
        <span className="text-cyan-600">React</span>{" "}
        <span className="text-red-600">from</span>{" "}
        <span className="text-cyan-600">'react'</span>;
        <br />
        <span className="text-red-600">import</span>{" "}
        <span className="text-cyan-600">ProjObject</span>{" "}
        <span className="text-red-600">from</span>{" "}
        <span className="text-cyan-600">'./ProjObject'</span>;
        <br />
        <br />
        <span className="text-red-600">const</span>{" "}
        <span className="text-cyan-600">Projects</span>{" "}
        <span className="text-red-600">:</span>{" "}
        <span className="text-orange-600">React</span>
        <span>.</span>
        <span className="text-orange-600">FC</span>{" "}
        <span className="text-red-600">=</span>{" "}
        <span className="text-cyan-600">()</span>{" "}
        <span className="text-red-600">{"=> "}</span>
        <span className="text-cyan-600">(</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-red-600">{"<"}</span>
        <span className="text-green-600">ProjObject</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-cyan-600">obj</span>
        <span className="text-red-600">=</span>{" "}
        <span className="text-green-600">{"{"}</span>
        <span className="text-yellow-600">{"{"}</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>description</span>
        <span className="text-red-600">:</span>{" "}
        <span className="text-cyan-600">
          "I like building projects to learn new frameworks and concepts."
        </span>
        <span>,</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>numberOfProjects</span> <span className="text-cyan-600"> :</span>{" "}
        <span className="text-cyan-600">10</span>
        <span>,</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-yellow-600">{"}"}</span>
        <span className="text-green-600">{"}"}</span>
        <br />
        &nbsp;&nbsp;
        <span> {"/>"}</span>
        <br />
        <span className="text-cyan-600">)</span>
        <span>;</span>
        <br />
        <br />
        <span className="text-red-600">export default</span>{" "}
        <span className="text-cyan-600">Projects</span>
      </div>
    </div>
  );
}
