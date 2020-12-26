import React from 'react';
import { Sidebar } from './Sidebar.component';
import { Tasks } from '../Tasks.component';

export const Content = () => (
    <section className="content">
        <Sidebar />
        <Tasks />
    </section>
);
