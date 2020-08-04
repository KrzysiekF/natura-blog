import React from 'react'
import PropTypes from 'prop-types'
import { ZielnikPostTemplate } from '../../templates/zielnik'

const ZielnikPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <ZielnikPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

ZielnikPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ZielnikPreview
