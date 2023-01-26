import { Faders } from 'phosphor-react';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'


export function Filtro() {
    return (
        <section className='hidden w-auto h-full bg-white'>
            <div className='w-80 h-full px-6 py-4'>
                <header className='flex flex-row items-center justify-start gap-6'>
                    <Faders size={26} />
                    <h2 className='text-lg'>Filtrar por: </h2>
                </header>

                <section>
                    <form>
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </form>
                </section>
            </div>
        </section>
    );
}