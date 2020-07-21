import styled from 'styled-components'

export const TodoListItem = styled.li`
width: 100%;
padding: 0;
margin: 10px 0;
display: flex;
  width: 100%;
  height: 40px;
  background-color: #eaeaea;
  border: 1px solid grey;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;

  input{
    margin: 0 10px;
  }
  span {
    width: 100%;
    word-break: break-all;
}

`