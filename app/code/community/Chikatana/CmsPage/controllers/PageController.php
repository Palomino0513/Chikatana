<?php
/**
 * Description of ResultController
 *
 * @author Pengo Stores
 * @category Pengo
 * @package Pengo_Banamex
 * @filesource
 */

class Chikatana_CmsPage_PageController extends Mage_Core_Controller_Front_Action
{
    public function indexAction() {
        $this->loadLayout();
        $this->renderLayout();
    }
}
