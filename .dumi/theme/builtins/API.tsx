import React, { useContext } from 'react';
import type { IApiComponentProps} from 'dumi/theme';
import { context, useApiData, AnchorLink } from 'dumi/theme';

type AtomPropsDefinition = (ReturnType<typeof useApiData>)[any][number]

const LOCALE_TEXTS = {
  'zh-CN': {
    name: '属性名',
    description: '描述',
    type: '类型',
    default: '默认值',
    required: '(必选)',
  },
  'en-US': {
    name: 'Name',
    description: 'Description',
    type: 'Type',
    default: 'Default',
    required: '(required)',
  },
};

function safeParse(input: string) {
  try {
    return JSON.parse(input)
  } catch (err) {
    console.error('[safeParse] parse error.')
    return input;
  }
}

type ISection = {
  dumi_type: '' | 'function' | 'retValue',
  dumi_signature: string,
  title: string,
  properties: AtomPropsDefinition[]

  // extra
  func_type?: string
}

function resolveDumiExportsArgs (data: ReturnType<typeof useApiData>) {
  const sections: ISection[] = [];

  for (let k in data) {
    const expts = data[k];

    const item: ISection = {
      dumi_type: '',
      dumi_signature: '',
      title: k,
      properties: [],
    }

    const properties = expts.filter(expt => {
      let isProp = false;
      switch(expt.identifier) {
        case '_dumi_type': {
          item.dumi_type = safeParse(expt.type)
          break;
        }
        case '_dumi_signature': {
          item.dumi_signature = expt.type ? safeParse(expt.type) : ''
          break;
        }
        default: {
          isProp = true;
          break;
        }
      }

      return isProp;
    })

    item.properties = properties;
    sections.push(item);
  }

  return sections;
}

export default ({ identifier, export: expt }: IApiComponentProps) => {
  const data = useApiData(identifier);

  const sections = resolveDumiExportsArgs(data);
  console.log('[feat] sections', sections);

  const ctxData = useContext(context);

  const { locale } = ctxData
  const texts = /^zh|cn$/i.test(locale) ? LOCALE_TEXTS['zh-CN'] : LOCALE_TEXTS['en-US'];

  return (
    <>
      {!sections?.length ? null : sections.map((section, idx) => {
        if (
          section.dumi_type === 'function'
          || section.dumi_type === 'retValue'
        ) {
          return (
            <div key={`${section.title}-${idx}`}>
              <h3>{section.title}</h3>
              <pre style={{ whiteSpace: 'normal' }}>
                <code>{section.dumi_signature}</code>
              </pre>
            </div>
          )
        }

        return (
          <div key={`${section.title}-${idx}`}>
            <h3>{section.title}</h3>
            <table style={{ marginTop: 24 }}>
              <thead>
                <tr>
                  <th>{texts.name}</th>
                  <th>{texts.description}</th>
                  <th>{texts.type}</th>
                  <th>{texts.default}</th>
                </tr>
              </thead>
              <tbody>
                {!section.properties ? null : section.properties.map(row => (
                  <tr key={row.identifier}>
                    <td>{row.identifier}</td>
                    <td>{row.description || '--'}</td>
                    <td>
                      <code>{row.type}</code>
                    </td>
                    <td>
                      <code>{row.default || (row.required && texts.required) || '--'}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      })}
    </>
  );
};
