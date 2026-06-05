import useInputs from './useInputs';


const Info87 = () => {
  console.log ( 'info87 시작 ---- ')
  const [state, onChange] = useInputs({
    name : '' , 
    nickname : ''
   }) ;

  const {name, nickname } = state ;
 
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname}  onChange={onChange} />
      </div>
      <div>
        <div>
          <b> 이름 : </b> {name}
        </div>

        <div>
          <b> 닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info87;
