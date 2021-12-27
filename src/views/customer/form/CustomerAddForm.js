import React from 'react'
import { Card, Input, Label } from 'reactstrap'

const CustomerAddForm = () => {
    return (
        <Card className="p-5">
            <div>
                <Label for="name">Name</Label>
                <Input id="name" name="name" type="text" />
            </div>
            <div>
                <Label for="name">Name</Label>
                <Input id="name" name="name" type="text" />
            </div>
            <div>
                <Label for="name">Name</Label>
                <Input id="name" name="name" type="text" />
            </div>
        </Card>
    )
}

export default CustomerAddForm
