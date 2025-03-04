import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="px-[120px] justify-between flex items-center h-20">
        {/* Logo */}
        <Image src={"/nxcent.svg"} height={24} width={154} alt="Nxcent Logo" />

        {/* Nav items */}
        <div className="space-x-[50px] text-[var(--black)]">
          <span>Home</span>
          <span>Service</span>
          <span>Feature</span>
          <span>Product</span>
          <span>Testimonial</span>
          <span>FAQ</span>
        </div>

        {/* Action Buttons */}
        <div className="space-x-4">
          <button className="text-sm font-medium bg-[var(--silver)] px-5 py-2.5 rounded-md text-[var(--primary)]">
            Login
          </button>
          <button className="text-sm font-medium bg-[var(--primary)] px-5 py-2.5 rounded-md text-white">
            Sign up
          </button>
        </div>
      </header>
      <section className="flex items-center px-[120px] justify-between py-[96px]">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-[var(--dark-gray)] text-6xl font-semibold leading-[72px]">
              Lessons and insights{" "}
              <span className="text-[var(--primary)]">from 8 years</span>
            </h1>
            <p className="text-[var(--gray)]">
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <button className="text-sm font-medium bg-[var(--primary)] px-8 py-3.5 rounded-md text-white">
            Register
          </button>
        </div>

        <Image
          src={"/illustration.svg"}
          height={407}
          width={391}
          alt="illustration"
        />
      </section>
    </div>
  );
}
