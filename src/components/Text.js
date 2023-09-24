import React, { useState } from 'react';
// import './index.css';

export default function InstructionBoard() {
  const [instruction, setInstruction] = useState([]);
  const [newInstruction, setNewInstruction] = useState({
    serialNumber: 0,
    instruction: '',
    disableDown: true,
    disableUp: true,
  });
  const [error, setError] = useState(false);

  const handleAddInstruction = (e) => {
    e.preventDefault();
    try {
      if (!newInstruction.instruction) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      } else {
        setError(false);
        let instruct = [...instruction, newInstruction];
        setInstruction(instruct);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleUp = () => {};
  const handleDown = () => {};
  return (
    <div className='mt-50 layout-column justify-content-center align-items-center'>
      <div>
        <form>
          <section className='my-30 layout-row align-items-center justify-content-center width-1000'>
            <input
              id='instruction-input'
              type='text'
              placeholder='New Instruction'
              data-testid='instruction-input'
              className='width-80'
              onChange={(e) => {
                try {
                  let instruct = e.target.value;
                  let serialNumber;
                  let up = tue,
                    down = true;
                  if (instruction && instruction.length)
                    serialNumber = instruction.length + 1;
                  else serialNumber = 1;
                  let newIns = { serialNumber, instruction: instruct, };
                  setNewInstruction(newIns);
                } catch (e) {
                  console.log(e);
                }
              }}
            />
            <button
              type='submit'
              className='ml-30 width-20'
              data-testid='add-instruction-button'
              onClick={handleAddInstruction}
            >
              Add Instruction
            </button>
          </section>
        </form>
        <span data-testid='error-message' className='error hidden-span'>
          {error ? 'Please enter an instruction' : ''}
        </span>
      </div>
      <div className='card outlined mt-0 width-800'>
        <div className='card-text'>
          <h4>Instructions</h4>
          <ul className='styled mt-50' data-testid='instructions'>
            {instruction && instruction.length ? (
              instruction.map((inst) => {
                return (
                  <li>
                    <div className='li-content layout-row justify-content-between align-items-center'>
                      <span>{inst.serialNumber}</span>
                      <span>{inst.instruction}</span>
                      <div className='icons'>
                        <button
                          disabled={inst.disableDown}
                          className='icon-only x-medium mx-2'
                          onClick={handleUp}
                        >
                          <i className='material-icons'>arrow_drop_down_icon</i>
                        </button>

                        <button
                          disabled={inst.disableUp}
                          className='icon-only x-medium mx-2'
                        >
                          <i className='material-icons' onClick={handleDown}>
                            arrow_drop_up_icon
                          </i>
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
