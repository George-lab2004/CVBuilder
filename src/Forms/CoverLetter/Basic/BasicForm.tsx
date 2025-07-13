import { useState } from "react";
import { useFormField } from "../../../Pages/CvBuilder/UseFormField";
import { Label, Select, Textarea, TextInput } from "flowbite-react";
import { FaTimes } from "react-icons/fa";

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

type BasicFormProps = {
  basic: BasicProps[];
  setBasic: React.Dispatch<React.SetStateAction<BasicProps[]>>;
};

export default function BasicForm({ basic, setBasic }: BasicFormProps) {
  // Fields
  const NameField = useFormField("", () => {}, "Name");
  const roleField = useFormField("", () => {}, "role");
  const companyNameField = useFormField("", () => {}, "companyName");
  const addressField = useFormField("", () => {}, "address");
  const phoneField = useFormField("", () => {}, "phone");
  const descriptionField = useFormField("", () => {}, "description");
  const linkedInField = useFormField("", () => {}, "linkedIn");
  const ManagerNameField = useFormField("", () => {}, "ManagerName");
  const ManagerLastNameField = useFormField("", () => {}, "ManagerLastName");
  const ManagerJobTitleField = useFormField("", () => {}, "ManagerJobTitle");
  const ManagerGenderField = useFormField("", () => {}, "ManagerGender");
  const DateField = useFormField("", () => {}, "date");
  const GmailField = useFormField("", () => {}, "gmail");
  const ManagerGmailField = useFormField("", () => {}, "ManagerGmail");
  const CompanyCityField = useFormField("", () => {}, "CompanyCity");
  const CompanystateField = useFormField("", () => {}, "Companystate");
  const CompanyZipCodeField = useFormField("", () => {}, "CompanyZipCode");
  const CompanyAddressField = useFormField("", () => {}, "CompanyAddress");

  const [descList, setDescList] = useState<string[]>([]);

  const handleBulletList = () => {
    if (descriptionField.value.trim()) {
      setDescList((prev) => [...prev, descriptionField.value.trim()]);
      descriptionField.setValue("");
    }
  };

  const handleRemoveBullet = (idx: number) => {
    setDescList((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleAddBasic = () => {
    if (NameField.value && roleField.value && companyNameField.value) {
      setBasic((prev) => [
        ...prev,
        {
          Name: NameField.value,
          role: roleField.value,
          companyName: companyNameField.value,
          address: addressField.value || undefined,
          phone: phoneField.value || undefined,
          description: descList,
          linkedIn: linkedInField.value || undefined,
          ManagerName: ManagerNameField.value || undefined,
          ManagerLastName: ManagerLastNameField.value || undefined,
          ManagerJobTitle: ManagerJobTitleField.value || undefined,
          ManagerGender: ManagerGenderField.value || undefined,
          date: DateField.value || undefined,
          gmail: GmailField.value || undefined,
          ManagerGmail: ManagerGmailField.value || undefined,
          CompanyCity: CompanyCityField.value || undefined,
          Companystate: CompanystateField.value || undefined,
          CompanyZipCode: CompanyZipCodeField.value || undefined,
          CompanyAddress: CompanyAddressField.value || undefined,
        },
      ]);

      // Reset fields
      [
        NameField,
        roleField,
        companyNameField,
        addressField,
        phoneField,
        descriptionField,
        linkedInField,
        ManagerNameField,
        ManagerLastNameField,
        ManagerJobTitleField,
        ManagerGenderField,
        DateField,
        GmailField,
        ManagerGmailField,
        CompanyCityField,
        CompanystateField,
        CompanyZipCodeField,
        CompanyAddressField,
      ].forEach((field) => field.setValue(""));
      setDescList([]);
    }
  };

  const requiredFilled =
    NameField.value && roleField.value && companyNameField.value;

  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md space-y-6">
      <div className="grid gap-4">
        {/* Personal Info */}
        <div>
          <Label htmlFor="name">Name</Label>
          <TextInput
            id="name"
            value={NameField.value}
            onChange={NameField.handleChange}
            placeholder="e.g. Vodafone Egypt"
          />
        </div>
        <div>
          <Label htmlFor="role">Role</Label>
          <TextInput
            id="role"
            value={roleField.value}
            onChange={roleField.handleChange}
            placeholder="e.g. Frontend Intern"
          />
        </div>
        <div>
          <Label htmlFor="address">
            Address <span className="text-gray-500">(optional)</span>
          </Label>
          <TextInput
            id="address"
            value={addressField.value}
            onChange={addressField.handleChange}
            placeholder="e.g. 123 Main St, City, Country"
          />
        </div>
        <div>
          <Label htmlFor="phone">
            Phone <span className="text-gray-500">(optional)</span>
          </Label>
          <TextInput
            id="phone"
            value={phoneField.value}
            onChange={phoneField.handleChange}
            placeholder="e.g. +20..."
          />
          <div className="mt-1 flex items-center gap-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-300/10 dark:text-yellow-200 border border-yellow-300 dark:border-yellow-500 rounded px-3 py-2 shadow-sm text-xs max-w-md">
            <span className="text-lg">📞</span>
            <div>
              Don’t forget to include your country code (e.g., +20 for Egypt).
            </div>
          </div>
        </div>
        <div>
          <Label htmlFor="date">
            Date <span className="text-gray-500">(optional)</span>
          </Label>
          <TextInput
            id="date"
            value={DateField.value}
            onChange={DateField.handleChange}
            placeholder="e.g. 2/18/19"
          />
        </div>
        <div>
          <Label htmlFor="gmail">
            Gmail <span className="text-gray-500">(optional)</span>
          </Label>
          <TextInput
            id="gmail"
            value={GmailField.value}
            onChange={GmailField.handleChange}
            placeholder="example@gmail.com"
          />
        </div>
        <div>
          <Label htmlFor="linkedIn">
            LinkedIn <span className="text-gray-500">(optional)</span>
          </Label>
          <TextInput
            id="linkedIn"
            value={linkedInField.value}
            onChange={linkedInField.handleChange}
            placeholder="e.g. https://linkedin.com/in/..."
          />
        </div>

        {/* Manager Info */}
        <div>
          <Label htmlFor="ManagerName">
            Manager First Name <span className="text-gray-500">(optional)</span>
          </Label>
          <TextInput
            id="ManagerName"
            value={ManagerNameField.value}
            onChange={ManagerNameField.handleChange}
            placeholder="e.g. John"
          />
        </div>
        <div>
          <Label htmlFor="ManagerLastName">
            Manager Last Name <span className="text-gray-500">(optional)</span>
          </Label>
          <TextInput
            id="ManagerLastName"
            value={ManagerLastNameField.value}
            onChange={ManagerLastNameField.handleChange}
            placeholder="Doe"
          />
        </div>
        <div>
          <Label htmlFor="ManagerJobTitle">
            Manager Job Title <span className="text-gray-500">(optional)</span>
          </Label>
          <TextInput
            id="ManagerJobTitle"
            value={ManagerJobTitleField.value}
            onChange={ManagerJobTitleField.handleChange}
            placeholder="e.g. Senior Developer"
          />
        </div>
        <div>
          <Label htmlFor="ManagerGender">
            Manager Gender <span className="text-gray-500">(optional)</span>
          </Label>
          <Select
            id="ManagerGender"
            value={ManagerGenderField.value}
            onChange={(e) => ManagerGenderField.setValue(e.target.value)}
          >
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
          </Select>
        </div>

        {/* Company Info */}
        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <TextInput
            id="companyName"
            value={companyNameField.value}
            onChange={companyNameField.handleChange}
            placeholder="e.g. Google"
          />
        </div>
        <div>
          <Label htmlFor="CompanyAddress">
            Company Address <span className="text-gray-500">(optional)</span>
          </Label>
          <TextInput
            id="CompanyAddress"
            value={CompanyAddressField.value}
            onChange={CompanyAddressField.handleChange}
            placeholder="123 Street Name"
          />
        </div>
        <div>
          <Label htmlFor="CompanyCity">
            Company City <span className="text-gray-500">(optional)</span>
          </Label>
          <TextInput
            id="CompanyCity"
            value={CompanyCityField.value}
            onChange={CompanyCityField.handleChange}
            placeholder="e.g. Nasr City"
          />
        </div>
        <div>
          <Label htmlFor="Companystate">
            Company State <span className="text-gray-500">(optional)</span>
          </Label>
          <TextInput
            id="Companystate"
            value={CompanystateField.value}
            onChange={CompanystateField.handleChange}
            placeholder="e.g. Cairo"
          />
        </div>
        <div>
          <Label htmlFor="CompanyZipCode">
            Company Zip Code <span className="text-gray-500">(optional)</span>
          </Label>
          <TextInput
            id="CompanyZipCode"
            value={CompanyZipCodeField.value}
            onChange={CompanyZipCodeField.handleChange}
            placeholder="e.g. 1231323"
          />
        </div>
      </div>

      {/* Description bullets */}
      <div>
        <Label htmlFor="desc">Description Bullet</Label>
        <div className="flex gap-2 mb-2">
          <Textarea
            id="desc"
            value={descriptionField.value}
            onChange={descriptionField.handleChange}
            placeholder="Add tasks, tools, achievements, etc."
            rows={2}
            className="flex-1"
          />
          <button
            type="button"
            onClick={handleBulletList}
            disabled={!descriptionField.value.trim()}
            className={`px-4 py-2 min-w-[80px] text-white rounded ${
              !descriptionField.value.trim()
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        </div>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
          {descList.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              {item}
              <button
                type="button"
                aria-label="Remove bullet"
                onClick={() => handleRemoveBullet(idx)}
              >
                <FaTimes className="text-red-500 hover:text-red-700 w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Final submit */}
      <button
        onClick={handleAddBasic}
        disabled={!requiredFilled}
        className={`w-full py-2 rounded text-white font-medium ${
          !requiredFilled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        Add Information
      </button>

      {/* Saved items */}
      {basic.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {basic.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm border border-gray-300 dark:border-gray-600"
            >
              <span className="text-sm truncate max-w-[120px]">
                {item.Name}
              </span>
              <button
                type="button"
                aria-label="Remove saved item"
                onClick={() =>
                  setBasic((prev) => prev.filter((_, i) => i !== index))
                }
                className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
      {/* Tip */}
      <div className="mt-4 flex items-start gap-2 bg-violet-100 text-violet-800 dark:bg-violet-300/10 dark:text-violet-200 border border-violet-300 dark:border-violet-500 rounded-lg px-4 py-3 shadow-sm text-sm max-w-md">
        <span className="text-xl">👨‍💼</span>
        <div>
          <strong className="font-semibold">Tip:</strong> Focus on what you did,
          tools you used, and your achievements. Keep it concise and impactful.
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <div className="flex items-start gap-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-300/10 dark:text-yellow-200 border border-yellow-300 dark:border-yellow-500 rounded-lg px-4 py-3 shadow-sm text-sm max-w-md">
          <span className="text-xl">💡</span>
          <div>
            <strong className="font-semibold">Tip:</strong> Keep your cover
            letter concise — ideally under one page.
          </div>
        </div>
        <div className="flex items-start gap-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-300/10 dark:text-yellow-200 border border-yellow-300 dark:border-yellow-500 rounded-lg px-4 py-3 shadow-sm text-sm max-w-md">
          <span className="text-xl">💡</span>
          <div>
            <strong className="font-semibold">Tip:</strong> Tailor it to the
            specific company and role — mention why you’re a great fit.
          </div>
        </div>
      </div>
    </div>
  );
}
