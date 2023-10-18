import livelocation from "@/public/assets/images/LiveLocationBG.svg";
import Link from "next/link";
import Image from "next/image";

const Livelocation: React.FC = () => {
  return (
    <div className="border-4 mx-10 border-black rounded-2xl grid lg:grid-cols-5 lg-h-[800px]">
      <div className="lg:col-span-3 h-full">
        <div
          className="h-full min-h-[700px] bg-cover bg-no-repeat relative flex flex-col"
          style={{
            backgroundImage: `url(${livelocation.src})`,
          }}
        >
          <Link href="#">
            <Image
              src="https://res.cloudinary.com/chowdeck/image/upload/v1667900761/Yaba_91670ee055.png"
              alt="yaba"
              height={90}
              width={86}
              className="w-16 md:w-[90px] absolute top-[20%] left-[18%]"
            />
          </Link>

          <Link href="#">
            <Image
              src="https://res.cloudinary.com/chowdeck/image/upload/v1685445670/abuja_0e7a646903.png"
              alt="abuja"
              height={90}
              width={86}
              className="w-16 md:w-[90px] absolute top-[5%] left-[5%]"
            />
          </Link>

          <Link href="#">
            <Image
              src="https://res.cloudinary.com/chowdeck/image/upload/v1685445670/gbagada_745224d9de.png"
              alt="eleyele"
              height={90}
              width={86}
              className="w-16 md:w-[90px] absolute top-[10%] right-[39%]"
            />
          </Link>

          <Link href="#">
            <Image
              src="https://res.cloudinary.com/chowdeck/image/upload/v1667900761/Lekki_657afbc50f.png"
              alt="mokola"
              height={90}
              width={86}
              className="w-16 md:w-[90px] absolute top-[5%] right-[10%]"
            />
          </Link>
        </div>
      </div>

      <div className="lg:col-span-2 border-l-4">
        <span>
          <h3 className=" flex text-2xl font-bold h-20 items-center justify-center border-b-4 bg-[rgb(153,200,255)]">
            Restaurants
          </h3>
        </span>
      </div>
    </div>
  );
};

export default Livelocation;
