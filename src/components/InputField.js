import React, { useState, useEffect } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import MessageBox from './MessageBox';

function InputField() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState('')

    useEffect(() => {
        setUsername(prompt('Please enter username!'))
    }, [])

    const sendMessage = (event) => {
        event.preventDefault()
        setMessages([...messages, input])
        setInput('')
    }
    return (
        <div>
            <form>
                <FormControl>
                    <InputLabel>Enter message...</InputLabel>
                    <Input value={input} onChange={event => setInput(event.target.value)} />
                </FormControl>
                <Button disabled={!input} type="submit" color="primary" onClick={sendMessage}>
                    <SendIcon />
                </Button>
            </form>
            {
                messages.map(message => (
                    <MessageBox text={message}/>
                    )
                )
            }
        </div>
    )
}

export default InputField
