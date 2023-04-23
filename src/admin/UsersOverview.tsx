import React, {useEffect, useState} from 'react';
import {Body, Cell, CenteredCell, Header, OverviewTable, Row} from "./StyledUsersOverview";
import copy from "./user-overview-copy.json";
import {UserOverview} from "./UserOverview";
import {UsersOverviewController} from "./UsersOverviewController";

const UsersOverview = ({controller}: { controller: UsersOverviewController }) => {
    const [overviews, setOverviews] = useState<UserOverview[]>([]);

    useEffect(() => {
        controller.getOverviews().then(o => setOverviews(o));
    });

    return (
        <OverviewTable>
            <Header>
                <Cell>{copy.nameHeader}</Cell>
                <CenteredCell>{copy.ratingHeader}</CenteredCell>
                <Cell>{copy.countryHeader}</Cell>
                <Cell>{copy.submissionDate}</Cell>
                <Cell>{copy.verificationHeader}</Cell>
            </Header>
            <Body>
                {overviews.map((o) => (
                    <Row key={o.name}>
                        <Cell>{o.name}</Cell>
                        <CenteredCell>{o.rating}</CenteredCell>
                        <Cell>{o.country}</Cell>
                        <Cell>{o.submittedOn}</Cell>
                        <Cell>{o.verificationStatus}</Cell>
                    </Row>
                ))}
            </Body>
        </OverviewTable>
    );
};

export default UsersOverview;