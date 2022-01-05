import React from 'react';
import { Message } from 'semantic-ui-react';

const MessageSuccess = ({ msg }) => (
	<Message positive>
<Message.Header>Compra realizada</Message.Header>
<p>
  Su código de compra es el <b>{msg.id}</b>.
</p>
</Message>
);

export default MessageSuccess;
