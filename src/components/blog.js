import React, { cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { getSlideByIndex, getNotesForSlide } from '../utils/slides';
import {
  BlogContainer,
  SlideWrapper,
  SlideNotes
} from './blog-components';

export default class Blog extends Component {
  _renderSlide() {
    const slide = getSlideByIndex(
      this.props.slides,
      this.props.slideReference,
      this.props.slideIndex
    );

    return cloneElement(slide, {
      slideIndex: this.props.slideIndex,
      blog: this.props.route.params.indexOf('blog') !== -1,
      export: this.props.route.params.indexOf('export') !== -1,
      print: this.props.route.params.indexOf('print') !== -1,
      transition: [],
      transitionIn: [],
      transitionOut: [],
      transitionDuration: 0,
      slideReference: this.props.slideReference,
    });
  }

  _renderNote() {
    const slide = getSlideByIndex(
      this.props.slides,
      this.props.slideReference,
      this.props.slideIndex
    );

    let notes = getNotesForSlide(slide);
    return notes;
  }

  render() {
    return (
      <BlogContainer>
        <SlideWrapper>
          {this._renderSlide()}
        </SlideWrapper>
        <SlideNotes>
          {this._renderNote()}
        </SlideNotes>
      </BlogContainer>
    );
  }
}
