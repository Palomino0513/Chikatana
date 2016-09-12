<?php
/**
 * <one line to give the program's name and a brief idea of what it does.>
 * ockCopyright (C) 2016 Jose Ivan Palomino
 *
 * This file is part of Foobar.
 *
 * Foobar is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Foobar is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
 */

class Chikatana_ReactJs_Block_Template extends Mage_Core_Block_Template
{
    protected $_template            = 'chikatana/reactjs/sections/content.phtml';
    protected $_reactJsIdElement    = 'react-content';

    /**
     * Get Id for div  master element in ReactJs script
     * @return string
     */
    public function getReactJsIdElement() {
        return $this->_reactJsIdElement;
    }

    /**
     * Set Id for div  master element in ReactJs script
     * @param string $reactJsScriptDir
     * @return Chikatana_ReactJs_Block_Template
     */
    public function setReactJsIdElement($reactJsIdElement) {
        $this->_reactJsIdElement = $reactJsIdElement;
        return $this;
    }
}
