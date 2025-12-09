import { useState } from "react";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Input from "../../components/form/input/InputField";
import Label from "../../components/form/Label";
import TextArea from "../../components/form/input/TextArea";
import Checkbox from "../../components/form/input/Checkbox";
import Radio from "../../components/form/input/Radio";
import Switch from "../../components/form/switch/Switch";
import Select from "../../components/form/Select";
import { Eye, EyeOff, Hash, Lock, User } from "lucide-react";

const departmentOptions = [
  { label: "Engineering", value: "engineering" },
  { label: "Sales", value: "sales" },
  { label: "Marketing", value: "marketing" },
  { label: "Operations", value: "operations" },
];

export default function Inputs() {
  const [fullName, setFullName] = useState("Jane Cooper");
  const [teamSize, setTeamSize] = useState("12");
  const [password, setPassword] = useState("secretKey123");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [notes, setNotes] = useState(
    "This space is perfect for longer feedback or internal instructions."
  );
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [availability, setAvailability] = useState("in-office");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [compactMode, setCompactMode] = useState(false);
  const [department, setDepartment] = useState("engineering");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div>
      <PageMeta
        title="React.js Input Components | TailAdmin - React.js Admin Dashboard Template"
        description="Showcase of input and form control variations built with TailAdmin React.js admin dashboard template."
      />
      <PageBreadcrumb pageTitle="Inputs & Controls" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <ComponentCard title="Input Fields">
          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName">Text input</Label>
              <Input
                id="fullName"
                name="fullName"
                value={fullName}
                placeholder="Enter full name"
                onChange={(event) => setFullName(event.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="teamSize">Number input</Label>
              <Input
                id="teamSize"
                name="teamSize"
                type="number"
                value={teamSize}
                placeholder="Enter team size"
                onChange={(event) => setTeamSize(event.target.value)}
                min="0"
              />
            </div>
            <div>
              <Label htmlFor="password">Password input</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
        </ComponentCard>

        <ComponentCard title="Input Fields with Prefix & Suffix">
          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName-adorned">Text input with prefix</Label>
              <Input
                id="fullName-adorned"
                name="fullName-adorned"
                value={fullName}
                placeholder="Enter full name"
                onChange={(event) => setFullName(event.target.value)}
                prefix={<User className="size-4" />}
              />
            </div>
            <div>
              <Label htmlFor="teamSize-adorned">
                Number input with prefix & suffix
              </Label>
              <Input
                id="teamSize-adorned"
                name="teamSize-adorned"
                type="number"
                value={teamSize}
                placeholder="Enter team size"
                onChange={(event) => setTeamSize(event.target.value)}
                min="0"
                prefix={<Hash className="size-4" />}
                suffix={
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                    people
                  </span>
                }
              />
            </div>
            <div>
              <Label htmlFor="password-adorned">
                Password input with toggle
              </Label>
              <Input
                id="password-adorned"
                name="password-adorned"
                type={isPasswordVisible ? "text" : "password"}
                value={password}
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
                prefix={<Lock className="size-4" />}
                suffix={
                  isPasswordVisible ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )
                }
                onSuffixClick={togglePasswordVisibility}
                suffixAriaLabel={
                  isPasswordVisible ? "Hide password" : "Show password"
                }
              />
            </div>
          </div>
        </ComponentCard>

        <ComponentCard title="Textarea">
          <div>
            <Label htmlFor="notes">Textarea</Label>
            <TextArea
              id="notes"
              rows={5}
              value={notes}
              onChange={setNotes}
              placeholder="Add a short note"
            />
          </div>
        </ComponentCard>

        <ComponentCard title="Checkboxes">
          <div className="space-y-3">
            <Checkbox
              id="emailAlerts"
              label="Email notifications"
              checked={emailAlerts}
              onChange={setEmailAlerts}
            />
            <Checkbox
              id="smsAlerts"
              label="SMS notifications"
              checked={smsAlerts}
              onChange={setSmsAlerts}
            />
          </div>
        </ComponentCard>

        <ComponentCard title="Radio Buttons">
          <div className="space-y-3">
            <Radio
              id="radio-office"
              name="availability"
              label="In-office"
              value="in-office"
              checked={availability === "in-office"}
              onChange={setAvailability}
            />
            <Radio
              id="radio-remote"
              name="availability"
              label="Remote"
              value="remote"
              checked={availability === "remote"}
              onChange={setAvailability}
            />
            <Radio
              id="radio-hybrid"
              name="availability"
              label="Hybrid"
              value="hybrid"
              checked={availability === "hybrid"}
              onChange={setAvailability}
            />
          </div>
        </ComponentCard>

        <ComponentCard title="Toggle / Switch">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <Switch
                label="Enable notifications"
                defaultChecked
                onChange={setNotificationsEnabled}
              />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {notificationsEnabled ? "On" : "Off"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <Switch
                label="Compact mode"
                color="gray"
                defaultChecked={compactMode}
                onChange={setCompactMode}
              />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {compactMode ? "On" : "Off"}
              </span>
            </div>
          </div>
        </ComponentCard>

        <ComponentCard title="Select Dropdown">
          <div>
            <Label htmlFor="department">Select dropdown</Label>
            <Select
              options={departmentOptions}
              defaultValue={department}
              onChange={setDepartment}
              placeholder="Choose a department"
            />
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
