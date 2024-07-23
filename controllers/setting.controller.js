const {Setting} = require("../models/setting.model")

//  setting get api

exports.getSetting = async (req, res) => {
 
    const setting = await Setting.findOne()
   
  res.status(200).json({ status: 200, message: "setting get successfully..", setting });
  };
  
// add and update setting api

exports.editOrAddSetting = async (req, res) => {
  const { name, logo, copyright, metaname, metalogo, metadescription, metakeyword } = req.body;

  try {
    let setting;
    const checkData = await Setting.findOne();

    // Check if setting exists by ID
    if (checkData) {

      // Update existing setting
      checkData.name = name;
      checkData.logo = logo;
      checkData.copyright = copyright;
      checkData.metaname = metaname;
      checkData.metalogo = metalogo;
      checkData.metadescription = metadescription;
      checkData.metakeyword = metakeyword;
      await checkData.save()

      setting = checkData

    } else {
      // Create new setting if ID is not provided
      setting = new Setting({
        name,
        logo,
        copyright,
        metaname,
        metalogo,
        metadescription,
        metakeyword
      });
    }

    // Save the setting (both updates and new creation)
    await setting.save();

    // Return success response
    res.status(200).json({
      status: 200,
      message: checkData ? 'Setting updated successfully' : 'Setting added successfully',
      setting
    });
  } catch (error) {
    // Handle any errors
    console.error('Error:', error);
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error'
    });
  }
};




  