import { memo } from "react";
import iconComponents from "./IconComponents";

const SkillIcon = memo(({
  type
}) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});

export default SkillIcon;