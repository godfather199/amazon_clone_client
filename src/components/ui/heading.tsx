type HeadingType = {
  title: string;
};

function Heading({ title }: HeadingType) {
  return (
    <div className="">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
    </div>
  );
}

export default Heading;
