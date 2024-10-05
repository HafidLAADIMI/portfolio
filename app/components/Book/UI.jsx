import { atom, useAtom } from "jotai";
const img1="/assets/hafid.png"
const img2="/assets/react.png"
const img3="/assets/nextjs.png"
const img4="/assets/tailwind.png"
const img5="/assets/js.png"
const img6="/assets/ts.png"
const img7="/assets/node.png"
const img8="/assets/mongodb.png"
const img9="/assets/mysql.png"
const img10="/assets/java.png"
const img11="/assets/spring.png"
const img12="/assets/redux.png"
const img13="/assets/bootstrap.png"
const img14="/assets/express.png"
const img15="/assets/authjs.png"
const img16="/assets/framer-motion.png"
const img17="/assets/appwrite.jfif"
const img18="/assets/firebase.png"
const img19="/assets/react-native.png"
const img20="/assets/springSecurity.png"
const img21="/assets/me.png"



const pictures = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: img21,
    back: img1,
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: img21,
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  // useEffect(() => {
  //   const audio = new Audio("/audios/page-flip-01a.mp3");
  //   audio.play();
  // }, [page]);

  return (
    <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
      <div className="w-full overflow-auto pointer-events-auto flex justify-center">
        <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
          {[...pages].map((_, index) => (
            <button
              key={index}
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                index === page
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(index)}
            >
              {index === 0 ? "Cover" : `Page ${index}`}
            </button>
          ))}
          <button
            className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
              page === pages.length
                ? "bg-white/90 text-black"
                : "bg-black/30 text-white"
            }`}
            onClick={() => setPage(pages.length)}
          >
            Back Cover
          </button>
        </div>
      </div>
    </main>
  );
};
