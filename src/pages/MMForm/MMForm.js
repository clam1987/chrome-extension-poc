import React from 'react';
import { Grid, Container } from '@material-ui/core';

import FormComponent from '../../components/FormComponent/FormComponent';

const MMForm = () => {
    const fields = [
        {
            label: "Name",
            id: "mm-form-name",
            dataAttr: "mm-form-name-field",
            name: 'name',
        },
        {
            label: "Company",
            id: "mm-form-comapny",
            dataAttr: "mm-form-comapny-field",
            name: 'company',
        },
        {
            label: "Title",
            id: "mm-form-title",
            dataAttr: "mm-form-title-field",
            name: 'title',
        },
        {
            label: "Phone Number",
            id: "mm-form-phoneNumber",
            dataAttr: "mm-form-phoneNumber-field",
            name: 'phoneNumber',
        },
        {
            label: "Email",
            id: "mm-form-email",
            dataAttr: "mm-form-email-field",
            name: 'email',
        }
    ]
    return (
        <Container maxWidth="sm">
        <Grid container>
            <Grid item xs={12}>
                <FormComponent fields={fields} />
            </Grid>
        </Grid>
        </Container>
    )
};

export default MMForm;