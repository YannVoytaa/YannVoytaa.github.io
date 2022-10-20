export const SkillDiv = ({ children, id }) => (
  <div
    id={id}
    style={{
      display: "none",
      color: "white",
    }}
  >
    {children}
  </div>
);
