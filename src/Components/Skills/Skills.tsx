type SkillItem = {
  dataformOne: { title: string; skills: string[] }[];
  dataformTwo: { title: string; skills: { name: string; level: number }[] }[];
};

export default function Skills({ skills }: { skills: SkillItem }) {
  const { dataformOne, dataformTwo } = skills;

  if (!dataformOne.length && !dataformTwo.length) return null;

  return (
    <div className="w-[98%] mx-auto mt-1 text-left">
      <h2 className="text-lg font-semibold">Skills</h2>
      <div className="border-t-2 border-gray-600 my-1" />

      {/* Simple Skill Format */}
      {dataformOne.map((group, idx) => (
        <p key={idx} className="mb-1 text-sm text-black">
          <span className="font-semibold">{group.title}:</span>{" "}
          {group.skills.join(", ")}
        </p>
      ))}

      {/* Rated Skill Format */}
      {dataformTwo.map((group, idx) => (
        <div key={idx} className="mt-2">
          <h3 className="text-sm font-semibold text-black mb-1">
            {group.title}
          </h3>
          <div className="grid grid-cols-2   gap-y-1 gap-x-8">
            {group.skills.map((skill, i) => (
              <div key={i} className="text-sm">
                <div className="flex justify-between">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
