export default function Header({
  name,
  job,
}: {
  name: string | null;
  job: string | null;
}) {
  return (
    <div className="flex flex-col  items-center ">
      <div className="text-3xl md:text-4xl mb-1">{name || ""} </div>
      <div>{job || ""}</div>
    </div>
  );
}
