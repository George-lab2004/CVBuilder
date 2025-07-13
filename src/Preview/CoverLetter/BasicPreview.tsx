import Basic from "../../Forms/CoverLetter/Basic/Basic";

type BasicProps = {
  Name: string;
  role: string;
  companyName: string;
  address?: string;
  phone?: string;
  description?: string[];
  linkedIn?: string;
  ManagerName?: string;
  ManagerJobTitle?: string;
  ManagerGender?: string;
  date?: string;
  gmail?: string;
  ManagerGmail?: string;
  CompanyCity?: string;
  Companystate?: string;
  CompanyZipCode?: string;
  CompanyAddress?: string;
  ManagerLastName?: string;
};

export default function BasicPreview({ basic }: { basic: BasicProps[] }) {
  return (
    <div>
      <div className="px-4 py-2 m-2 mb-2 bg-white">
        <Basic basic={basic} />
      </div>
    </div>
  );
}
