import Cart from "../models/Cart.js";
import Stuff from "../models/Stuff.js"

// add data
export const getCart = async (req, res) => {
  try {
    const carts = await Cart.findAll({
        include: [{
            model: Stuff,
            attributes: ['price','category','name'] // Attribut dari tabel Category yang ingin Anda ambil
          }]
    });

    return res.status(200).json({
      success: true,
      message: "Success to get data",
      data: carts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: `${error}` });
  }
};
// add cart
export const addCart = async (req, res) => {
  try {
    const { acount, size, stuffStuffID } = req.body;
    const userUserID = 9;
    await Cart.create({
      acount,
      size,
      stuffStuffID,
      userUserID,
    });

    return res.status(200).json({
      success: true,
      message: "Success to add",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: `${error}` });
  }
};

// delete
export const removeCart = async (req, res) => {
  try {
    const cartID = req.params.id;
    await Cart.destroy({
      where: {
        cartID: cartID,
      },
    });
    return res.status(200).json({
      success: true,
      message: "Success to delete",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: `${error}` });
  }
};
