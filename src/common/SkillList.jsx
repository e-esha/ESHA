

function SkillList({src,skill}) {
  return (
    <span>
    <img src={src} alt="Checkmarkicon"/>
    <p>{skill}</p>
</span>
  )
}

export default SkillList;