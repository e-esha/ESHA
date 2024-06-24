import style from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
function Skills()
 {
  return (
    <section id="skills" className={style.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={style.skillList}>
         <SkillList src={checkMarkIcon} skill="HTML"/>
         <SkillList src={checkMarkIcon} skill="CSS"/>
         <SkillList src={checkMarkIcon} skill="Javascript"/>
         <SkillList src={checkMarkIcon} skill="C++"/>
         <SkillList src={checkMarkIcon} skill="JAVA"/>
        </div>
        <hr />

        <div className={style.skillList}>
        <SkillList src={checkMarkIcon} skill="PHP"/>
        <SkillList src={checkMarkIcon} skill="C programming"/>
        <SkillList src={checkMarkIcon} skill="REACT"/>
        </div>
        </section>
  );
}

export default Skills;