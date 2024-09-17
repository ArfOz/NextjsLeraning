'use client'

import React, { useRef } from 'react'
import { MdWorkOutline } from 'react-icons/md'
import { FaSchool } from 'react-icons/fa'
import { TbTank } from 'react-icons/tb'
import {
    CypressIcon,
    DjangoIcon,
    ElasticSearchIcon,
    GraphqlIcon,
    JavascriptIcon,
    JestIcon,
    NestjsIcon,
    NextjsIcon,
    NodejsIcon,
    PythonIcon,
    ReactjsIcon,
    TypescriptIcon,
} from '../icons'
import { motion, useInView } from 'framer-motion'

function iconSelector(icon: string) {
    switch (icon) {
        case 'workIcon':
            return <MdWorkOutline />
        case 'schoollIcon':
            return <FaSchool />

        case 'armyIcon':
            return <TbTank />
        default:
            return <FaSchool />
    }
}

let iconStyles = { color: 'red', background: 'black', fontSize: '1.5em' }

export function Experience({ dictionary }: { dictionary: any }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <div className=" mt-10">
            <h2 className="self-center text-center">
                {dictionary['home']['working_history_title']}
            </h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent m-5">
                {dictionary['experience'].map((t: any, i: any) => {
                    return (
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white group-[.is-active]:bg-red-700 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                {iconSelector(t.icon)}
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-emerald-200 dark:bg-sky-300 p-4 rounded border border-slate-200 shadow">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-slate-900">
                                        {t.title} - {t.company}
                                    </div>
                                    <time className="font-caveat font-medium text-indigo-700">
                                        {t.years}
                                    </time>
                                </div>
                                <div className="text-slate-600">
                                    {t.technologies?.join(', ')}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
