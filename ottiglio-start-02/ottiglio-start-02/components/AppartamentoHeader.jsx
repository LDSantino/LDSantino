import Image from "next/image";

const AppartamentoHeader = ({image}) => {
  return (
    <>
  <section>
          <Image
            src={`/images/${image}`}
            alt=""
            className="object-cover h-[400px] w-full"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
          />
  </section>
  </>
  );
}

export default AppartamentoHeader;